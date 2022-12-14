import ProductImg from "../general-ui/ProductImg";
import Increase from "/assets/icons/increase.svg";

export default function MobileProductItem({
  title,
  perf,
  category,
  img,
  price,
  sales,
  status,
}) {
  return (
    <div className="mx-6 md:hidden border-b border-gunmetal pb-7">
      <aside className="flex items-start">
        <div className="flex items-center basis-[90%]">
          <div className="basis-1/3">
            <ProductImg img={img} />
          </div>

          <div className="basis-3/5">
            <p className="font-semibold mb-1">{title}</p>
            <div className="flex items-center space-x-3">
              <p className="text-sm bg-gunmetal p-0.5 rounded-md">${price}</p>
              <p className="text-sm text-sonic-silver">{category}</p>
            </div>
          </div>
        </div>

        <button className="basis-[10%] place-items-end">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66683 9.99967C6.66683 10.9201 5.92064 11.6663 5.00016 11.6663C4.07969 11.6663 3.3335 10.9201 3.3335 9.99967C3.3335 9.0792 4.07969 8.33301 5.00016 8.33301C5.92064 8.33301 6.66683 9.0792 6.66683 9.99967Z"
              fill="#6F767E"
            />
            <path
              d="M11.6668 9.99967C11.6668 10.9201 10.9206 11.6663 10.0002 11.6663C9.07969 11.6663 8.3335 10.9201 8.3335 9.99967C8.3335 9.0792 9.07969 8.33301 10.0002 8.33301C10.9206 8.33301 11.6668 9.0792 11.6668 9.99967Z"
              fill="#6F767E"
            />
            <path
              d="M16.6668 9.99967C16.6668 10.9201 15.9206 11.6663 15.0002 11.6663C14.0797 11.6663 13.3335 10.9201 13.3335 9.99967C13.3335 9.0792 14.0797 8.33301 15.0002 8.33301C15.9206 8.33301 16.6668 9.0792 16.6668 9.99967Z"
              fill="#6F767E"
            />
          </svg>
        </button>
      </aside>

      <div className="space-y-3 mt-4 text-sonic-silver text-sm font-semibold">
        <div className="flex items-center">
          <p className="basis-[30%]">Status</p>
          <p>
            {" "}
            <span className="basis-3/5 p-1.5 rounded-md bg-bud-green bg-opacity-10 text-bud-green">
              {status}
            </span>
          </p>
        </div>

        <div className="flex items-center">
          <p className="basis-[30%]">Sales</p>
          <p className="basis-3/5">
            ${sales}
            <span className="text-bud-green w-2 ml-2 text-sm font-semibold">
              {" "}
              <img
                className="inline"
                src={Increase}
                alt="sales performance"
              />{" "}
              {perf}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
