import React,{useState, useRef, useEffect} from 'react';


const Informations = ({start = 0, end}) => {
    const [count, setValue] = useState(null);
    const ref = useRef(start);

    const counter = end / 200;

    const Count = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current / counter);
        }
        if (result > end) return setValue(end);
        setValue(end);
        ref.current = result;
    }
    setTimeout(Count, 70);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            Count();
        }
        return () => (isMounted = false);
    }, [end]);


    return(
        <>
            <div className="container">
                <CountUp start={0} end={20} />
            </div>
        </>
    )
}

export default Informations;