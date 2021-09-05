import React from "react";
import Data from "./data.json";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div className="product-list">
      <table className="product-list-table">
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("title")}
                className={getClassNamesFor("title")}
              >
                title
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("type")}
                className={getClassNamesFor("type")}
              >
                Type
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("description")}
                className={getClassNamesFor("description")}
              >
                Description
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("filename")}
                className={getClassNamesFor("filename")}
              >
                Filename
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("height")}
                className={getClassNamesFor("height")}
              >
                Height
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("width")}
                className={getClassNamesFor("width")}
              >
                Width
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("price")}
                className={getClassNamesFor("price")}
              >
                Price
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("rating")}
                className={getClassNamesFor("rating")}
              >
                Rating
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>{item.filename}</td>
              <td>{item.height}</td>
              <td>{item.width}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  return <ProductTable products={Data.products} />;
}
