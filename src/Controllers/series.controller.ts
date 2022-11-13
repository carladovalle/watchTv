import { Request, Response } from "express";
import connection from "../Config/database.js";

export interface Serie{
    id: number,
    name: string,
    platform: string,
    genre: string,
    status: string,
    summary: string
}

export async function insertSeries(req: Request, res: Response) {

    const { name, platform, genre, status, summary } = req.body;

    try {
        await connection.query<Serie>(
            `INSERT INTO series (name, platform, genre, status, summary) VALUES ($1, $2, $3, $4, $5);`,
            [name, platform, genre, status, summary]
        );
    } catch(error) {
        return res.send(error.message);
    }

    res.sendStatus(201);
}

export async function viewSeries(req: Request, res: Response) {
    const series = await connection.query<Serie>(
        'SELECT * FROM series;'
    );
    res.send(series.rows);
}

export async function updateSerie(req: Request, res: Response) {

    const { summary } = req.body;
    const { id } = req.params;

    try {
        await connection.query<Serie>(
            `UPDATE series SET summary = $1 WHERE id = $2;`,
            [summary, id]
        );
    } catch(error) {
        return res.send(error.message);
    }

    res.sendStatus(201);
}

export async function deleteSerie(req: Request, res: Response) {

    const { id } = req.params;

    try {
        await connection.query<Serie>(
            `DELETE FROM series WHERE id = $1;`,
            [id]
        );
    } catch(error) {
        return res.send(error.message);
    }

    res.sendStatus(200);
}

export async function quantityPerPlatform(req: Request, res: Response) {
    const seriesPerPlatform = await connection.query<Serie>(
        `SELECT series.platform, COUNT(platform) as "quantity"
        FROM series
        GROUP BY series.platform`
    );
    res.send(seriesPerPlatform.rows);
}