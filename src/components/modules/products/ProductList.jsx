import React from "react";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
// import Search from "../../ui-components/general-ui/Search";
import ProductTable from "../../ui-components/products-ui/ProductTable";

export default function ProductList() {
  return (
    <section className="mt-3 bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <div className="flex gap-x-6">
          <SectionTitle titleText="Products" titleColor="bg-lavender-blue" />
          {/* <Search /> */}
        </div>
        <div className="p-2 border-2 border-gunmetal rounded-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2356 10.9274C10.7182 11.3065 11 11.8863 11 12.5V19.1761L13 18.4724V12.5C13 11.8863 13.2818 11.3065 13.7644 10.9274L19.6178 6.32821C19.8591 6.13863 20 5.84875 20 5.54189V4H4V5.54189C4 5.84876 4.14089 6.13863 4.38218 6.32821L10.2356 10.9274ZM20.8535 7.90085L15 12.5V19.1806C15 19.605 14.7322 19.9831 14.3319 20.124L10.3319 21.5314C9.68145 21.7602 9 21.2776 9 20.5881V12.5L3.14654 7.90085C2.42266 7.33209 2 6.46248 2 5.54189V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V5.54189C22 6.46248 21.5773 7.33209 20.8535 7.90085Z"
              fill="#6F767E"
            />
          </svg>
        </div>
      </div>

        <ProductTable />
    </section>
  );
}
