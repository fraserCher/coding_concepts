import { Request, Response } from 'express-serve-static-core';

export class ConfigController {
    private readonly simpleGame = 1;
    private readonly complexGame = 2;
    
    listGames(req: Request, res: Response) {
        const games = [
            {
                id: this.simpleGame,
                name: "Simple Colour Chase"
            },
            {
                id: this.complexGame,
                name: "Complext Colour Chase"
            }
        ];
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(games));
    }

    async getConfig(req: Request, res: Response) {
        await this.sleep(1000);

        if (req.query.id == this.simpleGame) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(this.simpleGameLayout()));
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(this.complexGameLayout()));
        }
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private simpleGameLayout(): object {
        const colours = ["red", "blue", "green"];
        const coloursMaxIndex = 2;
        const primaryIndex = this.randomNumber(0, coloursMaxIndex);
        let secondaryIndex = 0;
        
        while (secondaryIndex == primaryIndex) {
            secondaryIndex = this.randomNumber(0, coloursMaxIndex);
        }
        
        let tertiaryIndex = 0;
        while (tertiaryIndex == primaryIndex || tertiaryIndex == secondaryIndex) {
            tertiaryIndex++;
        }

        const primaryColour = colours[primaryIndex];
        const secondaryColour = colours[secondaryIndex];
        const tertiaryColour = colours[tertiaryIndex];

        return {
            "setup": {
                "A3": primaryColour,
                "A7": secondaryColour,
                "A8": tertiaryColour,
                "C3": tertiaryColour,
                "C5": primaryColour,
                "C7": primaryColour,
                "D1": secondaryColour,
                "D5": secondaryColour,
                "D6": tertiaryColour,
                "D8": tertiaryColour,
                "E3": primaryColour,
                "E5": primaryColour,
                "E7": secondaryColour,
                "F7": primaryColour,
                "G1": secondaryColour,
                "G3": tertiaryColour,
                "G6": tertiaryColour,
                "H4": secondaryColour
            },
            "rules": `In the fewest moves possible collect all of the ${primaryColour} squares`
        };        
    }

    private randomNumber(min: number, max: number): number {
        return Math.floor((Math.random() * max) + min);
    }

    private complexGameLayout(): object {
        return {};
    }
}
