import { async } from "regenerator-runtime";
import "../component/food-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("#search-bar");
    const foodListElement = document.querySelector("food-list");

    const contentFiller = (results) => {
        foodListElement.foods = results;
    };

    const fallbackResult = (message) => {
        foodListElement.renderError(message);
    };

    const onSearch = async (e) => {
        e.preventDefault();
        try {
            const result = await DataSource.searchFood(searchElement.value);
            contentFiller(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const foodCategoriesInit = async () => {
        try {
            const result = await DataSource.foodCategories();
            contentFiller(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    document.querySelector("form").addEventListener("submit", onSearch);
    foodCategoriesInit();
};

export default main;
