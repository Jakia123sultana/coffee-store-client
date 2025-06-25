import {Link} from "react-router";
import Swal from "sweetalert2";

export default function CoffeCard({coffee, coffees, setCoffees}) {
  const {_id, name, price, quantity, photo} = coffee;
  const handleDelete = (id) => {
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://coffee-store-server-swart-iota.vercel.app/coffees/${_id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const remainingCoffees = coffees.filter(
                  (cof) => cof._id !== _id
                );
                setCoffees(remainingCoffees);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex mt-8 w-full justify-around">
          <div>
            <h2 className="">{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <Link to={`/coffee/${_id}`}>
                <button className="btn join-item">View</button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
