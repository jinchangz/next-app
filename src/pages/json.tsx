import Data from '../../public/test.json'

export default function Json() {
    Data.map(key)

    return <div className="text-3xl">About</div>
}

function key(value: { album: string; year: string; US_peak_chart_post: string }, index: number, array: { album: string; year: string; US_peak_chart_post: string }[]): unknown {
    throw new Error('Function not implemented.')
}
