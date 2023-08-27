import { Dispatch, FC, SetStateAction } from "react";

type searcherPropsType = {
  setFilter: Dispatch<SetStateAction<string>>,
  setProductCountOnPage: Dispatch<SetStateAction<number>>,
  setIsFetchingProducts: Dispatch<SetStateAction<boolean>>,
}

interface ISearcherElements extends EventTarget {
  filter: { value: string },
  productCountOnPage: { value: number }
}

const Searcher: FC<searcherPropsType> = ({ setFilter, setProductCountOnPage, setIsFetchingProducts }) => {
  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as ISearcherElements;

    if (form.productCountOnPage.value) {
      setProductCountOnPage(form.productCountOnPage.value);
    } else {
      setProductCountOnPage(10);
    }

    if (form.filter.value) {
      setFilter(form.filter.value);
    } else {
      setFilter('');
    }
    
    setIsFetchingProducts((prev) => !prev);
  }

 return (
  <div className="searcher">
    <form onSubmit={handelSubmit}>
      <span className="searcher_explanation_filter">
        Поиск<br/>
        <input type="text" name="filter" placeholder="Введите строку поиска"></input>
      </span>
      <span className="searcher_explanation_amount">
        Кол-во<br/>
      <input type="text" name="productCountOnPage"></input>
      </span>
      <span className="searcher_button">
      <input type="submit" value="Поиск"></input>
      </span>
    </form>
  </div>
 )
}

export default Searcher;
