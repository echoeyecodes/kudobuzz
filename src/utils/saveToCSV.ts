import * as fastcsv from 'fast-csv'
import fs from 'fs'

export function saveToCSV<T>(data: T[], outputPath: string) {
    return new Promise<string>((resolve, reject) => {
        const csvStream = fastcsv.format({ headers: true });

        const writableStream = fs.createWriteStream(outputPath);

        csvStream.pipe(writableStream);

        data.forEach((item) => {
            csvStream.write(item);
        });

        csvStream.end();

        writableStream.on('finish', () => {
            resolve(outputPath)
        });
        writableStream.on('error', (error) => {
            reject(error)
        });
    })
}