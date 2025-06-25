import { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeCard from './CoffeeCard';

export default function Home() {
     const initialCoffees = useLoaderData();
      const [coffees, setCoffees] = useState(initialCoffees);
  console.log(initialCoffees)
      return (
    <>
      <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeCard 
                        key={coffee._id} 
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                        coffee={coffee}></CoffeCard>)
                }
            </div>
        </div>
    </>
  );
}