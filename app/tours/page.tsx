import Link from "next/link";

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

const fetchTours = async() => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); //gecikme yapacak.
    const response = await fetch(url);
    const data: Tour[] = await response.json();
    return data;
}

async function TourPage() { 
    const data =await fetchTours();
    console.log(data);

    return <section>
        <h1 className="text-3xl mb-4">Tours</h1>
        {data.map((tour) => {
            return (
                <Link key={tour.id} href={`/tours/${tour.id}`} className='hover:text-blue'>
                    <h2>{tour.name}</h2>
                </Link>
            )
        })}
    </section>
}

export default TourPage;