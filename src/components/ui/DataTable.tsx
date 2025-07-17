import React from "react";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
}

// Sample of columns and data to be passed
// const columns = [
//   { key: "id", label: "ID" },
//   { key: "name", label: "Product Name" },
//   {
//     key: "price",
//     label: "Price",
//     render: (row: any) => `Rs. ${row.price}`,
//   },
//   {
//     key: "inStock",
//     label: "Status",
//     render: (row: any) => (
//       <span
//         className={`px-2 py-1 text-xs rounded-full ${
//           row.inStock
//             ? "bg-green-100 text-green-700"
//             : "bg-red-100 text-red-700"
//         }`}
//       >
//         {row.inStock ? "In Stock" : "Out of Stock"}
//       </span>
//     ),
//   },
//   {
//     key: "action",
//     label: "",
//     render: (row: any) => (
//       <button className="text-blue-700 font-semibold">{row.action}</button>
//     ),
//   },
// ];

// const data = [
//   {
//     id: 1,
//     name: "Product A",
//     price: 100,
//     inStock: true,
//     action: "Edit",
//   },
//   {
//     id: 2,
//     name: "Product B",
//     price: 200,
//     inStock: false,
//     action: "Edit",
//   },
// ];

const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data found.",
}: DataTableProps<T>) => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm text-left">
        <thead className=" text-gray-700 uppercase text-sm">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-4 py-3 border-b-1 border-b-gray-300 ${
                  col.className || ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {isLoading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-400"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors duration-150 border-b-1 border-b-gray-300"
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={`px-4 py-3 ${col.className || ""}`}
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

// import React, { useState } from "react";

// interface Column<T> {
//   key: keyof T;
//   label: string;
//   render?: (row: T) => React.ReactNode;
//   className?: string;
// }

// interface DataTableProps<T> {
//   columns: Column<T>[];
//   data: T[];
//   isLoading?: boolean;
//   emptyMessage?: string;
//   selectable?: boolean;
//   onSelect?: (selectedRows: T[]) => void;
//   rowClassName?: string | ((row: T, isSelected: boolean) => string);
// }

// const DataTable = <T extends Record<string, any>>({
//   columns,
//   data,
//   isLoading = false,
//   emptyMessage = "No data found.",
//   selectable = false,
//   onSelect,
//   rowClassName,
// }: DataTableProps<T>) => {
//   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

//   const toggleRowSelection = (rowIndex: number) => {
//     const newSelectedRows = new Set(selectedRows);
//     if (newSelectedRows.has(rowIndex)) {
//       newSelectedRows.delete(rowIndex);
//     } else {
//       newSelectedRows.add(rowIndex);
//     }
//     setSelectedRows(newSelectedRows);

//     if (onSelect) {
//       onSelect(data.filter((_, index) => newSelectedRows.has(index)));
//     }
//   };

//   const toggleAllRows = () => {
//     if (selectedRows.size === data.length) {
//       setSelectedRows(new Set());
//       if (onSelect) onSelect([]);
//     } else {
//       const allRowIndices = new Set(data.map((_, index) => index));
//       setSelectedRows(allRowIndices);
//       if (onSelect) onSelect([...data]);
//     }
//   };

//   const getRowClass = (row: T, rowIndex: number) => {
//     const isSelected = selectedRows.has(rowIndex);
//     const baseClasses =
//       "hover:bg-gray-50 transition-colors duration-150 border-b-1 border-b-gray-300";
//     const selectedClass = isSelected ? "bg-blue-50" : "";

//     if (typeof rowClassName === "function") {
//       return `${baseClasses} ${selectedClass} ${rowClassName(row, isSelected)}`;
//     }

//     return `${baseClasses} ${selectedClass} ${rowClassName || ""}`;
//   };

//   return (
//     <div className="overflow-auto">
//       <table className="min-w-full text-sm text-left">
//         <thead className="text-gray-700 uppercase text-xs">
//           <tr>
//             {selectable && (
//               <th className="px-4 py-3 border-b-1 border-b-gray-300 w-10">
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.size === data.length && data.length > 0}
//                   onChange={toggleAllRows}
//                   className="form-checkbox h-3 w-3 text-blue-600 transition duration-150 ease-in-out"
//                 />
//               </th>
//             )}
//             {columns.map((col) => (
//               <th
//                 key={String(col.key)}
//                 className={`px-4 py-3 border-b-1 border-b-gray-300 ${
//                   col.className || ""
//                 }`}
//               >
//                 {col.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="text-gray-800">
//           {isLoading ? (
//             <tr>
//               <td
//                 colSpan={columns.length + (selectable ? 1 : 0)}
//                 className="px-4 py-6 text-center text-gray-500"
//               >
//                 Loading...
//               </td>
//             </tr>
//           ) : data.length === 0 ? (
//             <tr>
//               <td
//                 colSpan={columns.length + (selectable ? 1 : 0)}
//                 className="px-4 py-6 text-center text-gray-400"
//               >
//                 {emptyMessage}
//               </td>
//             </tr>
//           ) : (
//             data.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className={getRowClass(row, rowIndex)}
//                 onClick={() => selectable && toggleRowSelection(rowIndex)}
//                 style={{ cursor: selectable ? "pointer" : "default" }}
//               >
//                 {selectable && (
//                   <td
//                     className="px-4 py-3"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedRows.has(rowIndex)}
//                       onChange={() => toggleRowSelection(rowIndex)}
//                       className="form-checkbox h-3 w-3 text-blue-600 transition duration-150 ease-in-out"
//                       onClick={(e) => e.stopPropagation()}
//                     />
//                   </td>
//                 )}
//                 {columns.map((col) => (
//                   <td
//                     key={String(col.key)}
//                     className={`px-4 py-3 ${col.className || ""}`}
//                   >
//                     {col.render ? col.render(row) : row[col.key]}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
