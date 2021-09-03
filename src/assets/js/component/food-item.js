class FoodItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .card {

                border: 1px solid #4b005a;
                border-radius: 25px;
                overflow: hidden;
                box-shadow: 0px 0px 5px #25002c;
                margin: 50px 25px;
                flex-basis: 20%;
                padding: 12px;
            
            }            
            
            .card img {
                object-fit: cover;
                object-position: center;
                border-radius: 25px;
            }

            figcaption {
                font-weight: 700;
                font-size: 24px;
                margin: 6px 2px 0 12px;
            }
            
            p {
                font-weight: 400;
                margin: 0 0px 0 12px;
            }

            p:nth-child(3) {
                font-weight: 300;
                margin-bottom: 12px;
            }

        </style>`;

        if (!this._food.strMeal) {
            this.shadowDOM.innerHTML += `
            <style>
            .card {
                max-width: 450px;
                height: 380px;
                border: 1px solid #4b005a;
                border-radius: 25px;
                overflow: hidden;
                box-shadow: 0px 0px 5px #25002c;
                margin: 50px 25px;
                flex-basis: 20%;
                padding: 12px;
            
            }     
            </style>
            
            <article class="card">
                <figure>
                    <img src="${this._food.strCategoryThumb}"
                        alt="">
                    <figcaption>${this._food.strCategory}</figcaption>
                </figure>
                <p>${this._food.strCategoryDescription.split(".")[0]}</p>
            </article>`;
            return;
        }

        this.shadowDOM.innerHTML += `
        <style>
        .card img {
            height: 300px;
            object-fit: cover;
            object-position: center;
            border-radius: 25px;
        }
        </style>

            <article class="card">
                <figure>
                    <img src="${this._food.strMealThumb}"
                        alt="">
                    <figcaption>${this._food.strMeal}</figcaption>
                </figure>
                <p>${this._food.strCategory}</p>
                <p>${this._food.strArea}</p>
            </article>`;




    }
}

customElements.define("food-item", FoodItem);
