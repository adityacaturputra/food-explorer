import axios from "axios";

class DataSource {

    static searchFood(keyword) {
        return axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
            )
            .then((response) => {
                return Promise.resolve(response.data.meals);
            })
            .catch(() => {
                return Promise.reject(`${keyword} is not found`);
            });
    }

    static foodCategories() {
        return axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            )
            .then((response) => {
                return Promise.resolve(response.data.categories);
            })
            .catch(() => {
                return Promise.reject("Failed to get Food Category");
            });
    }
}

export default DataSource;
