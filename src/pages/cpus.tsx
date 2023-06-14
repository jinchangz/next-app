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
    const results: void = readString(file, {
        header: true,
        worker: true,
        complete: (results) => {
            console.log('---------------------------');
            console.log(results);
            console.log('---------------------------');
            return results;
        },
    });


    return {
        props: results
    }
}


export default function Home(props: any) {
    console.log('props======')
    console.log((props.data));
    Array.isArray(props.data) ? console.log('true') : console.log('false');
    return (
        <ul>
            {props.data.map((value: {}, index: number) =>
                <li>{index}-{value.TDP}
                </li>
            )}
        </ul>


    );



}
