import express from 'express';

import { ConfigController } from './ConfigController';

describe('ConfigController', () => {

    let subject: ConfigController;

    beforeEach(() => {
        subject = new ConfigController();
    });

    it('lists expected games', () => {
        const response = jasmine.createSpyObj('response', ['setHeader', 'send']);
        
        subject.listGames({} as express.Request, response);

        expect(response.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
        expect(response.send).toHaveBeenCalledWith([
            {
                id: 1,
                name: "Simple Colour Chase"
            },
            {
                id: 2,
                name: "Complex Colour Chase"
            }
        ]);
    });

    it('returns expected config for a simple game', async () => {
        const request: Partial<express.Request> = { query: { id: 1 } };
        const response: jasmine.SpyObj<express.Response> = jasmine.createSpyObj('response', ['setHeader', 'send']);

        await subject.getConfig(request as express.Request, response);

        expect(response.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
        expect(response.send).toHaveBeenCalled();
        const config = response.send.calls.argsFor(0)[0];
        expect(Object.keys(config)).toEqual(['setup', 'rules']);
        expect(Object.keys(config.setup).length).toBe(18);
        expect(Object.keys(config.setup).filter(coord => /^[A-H][1-9]$/.test(coord)).length).toBe(18);
        expect(Object.keys(config.setup).filter(coord => /^(red|blue|green)$/.test(config.setup[coord])).length).toBe(18);
    });

    xit('returns expected config for a complex game', () => {
        // TODO
    });

});