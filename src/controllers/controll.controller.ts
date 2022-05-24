import { Request, Response } from 'express';
import marsRover from '../helpers/marsmission';

const commands = (request: Request, response: Response) => {
    try {
        const { position, instructions } = request.body;
        if (!position) {
            return response.status(400).json({
                success: false,
                message: 'Position is needed for the rover'
            })
        }

        if (!instructions) {
            return response.status(400).json({
                success: false,
                message: 'Instructions are needed for the rover'
            })
        }

        const mars = marsRover(position, instructions);
        return response.status(200).json({
            success: true,
            data: mars
        })
    } catch (error) {
        console.log(error);
        return response.status(400).json({
            success: false,
            message: 'Something went wrong please try again later'
        })
    }
}

export default { commands };