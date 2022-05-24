import { Request, Response } from 'express';
import marsRover from '../helpers/marsmission';

const commands = (request: Request, response: Response) => {
    try {
        const { position, instrunctions } = request.body;
        const mars = marsRover(position, instrunctions);
        return response.status(200).json({
            success: true,
            data: mars
        })
    } catch (error) {
        console.log(error);
        return response.status(400).json({
            sucess: false,
            message: 'Something went wrong please try again later'
        })
    }
}

export default { commands };