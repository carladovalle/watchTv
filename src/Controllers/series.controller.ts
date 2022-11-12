import { Request, Response } from "express";
import connection from "../Config/database.js";

export async function insertSeries(req: Request, res: Response) {

    const { name, platform, genre, status, summary } = req.body;

    try {
        await connection.query(
            `INSERT INTO series (name, platform, genre, status, summary) VALUES ($1, $2, $3, $4, $5);`,
            [name, platform, genre, status, summary]
        );
    } catch(error) {
        return res.send(error.message);
    }

    res.sendStatus(201);
}

export async function viewSeries(req: Request, res: Response) {
    const series = await connection.query('SELECT * FROM series;');
    res.send(series.rows);
}