import csv from 'csvtojson';;
import * as fs from 'fs';
import path from 'path';
import { usePapaParse } from 'react-papaparse';

export async function getStaticProps() {
    // `getStaticProps()` の中で `fs` を少しでも利用すれば OK
    //const reader = new FileReader();

    const filePath: string = path.join(process.cwd(), 'CPUs.csv');
    const file: string = fs.readFileSync(filePath, 'utf-8');
    const { readString } = usePapaParse();
    const results = readString(file, {
        worker: true,
        complete: (results) => {
            console.log('---------------------------');
            console.log(typeof (results));
            console.log('---------------------------');
            return results;
        },
    });
    // const Jsondata = readString(data, {
    //     worker: true,
    //     complete: (results) => {
    //         console.log('---------------------------');
    //         console.log(results);
    //         console.log('---------------------------');
    //     },
    // });

    return {
        props: { data: results.data }
    }
}

export default function Home(data: object) {
    console.log(typeof (data));
    const array = data;
    return (

        <ul>
            { /* mapping all the data inside
                an unordered list */}

            {data.map((k, v) => (
                <li key={v.url}>{poke.name}</li>
            ))}
        </ul>

    );
}
