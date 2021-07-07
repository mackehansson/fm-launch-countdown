import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
    const [state, setState] = useState({
        titleText: "We're launching soon",
    });

    const onWhenDone = () => {
        setState({
            ...state,
            titleText: "We are launched!",
        });
    };

    return (
        <main id="page-wrapper">
            <header className="title">
                <h1>{state.titleText}</h1>
            </header>
            <section className="counter">
                <Counter
                    toDate="September 1, 2021 08:00:00"
                    whenDone={onWhenDone}
                />
            </section>
            <section className="socials">
                <a href="https://www.facebook.com">
                    <i
                        className="fab fa-facebook-square"
                        aria-hidden="true"
                    ></i>
                    <span className="visible-hidden">Facebook</span>
                </a>
                <a href="https://www.pinterest.com">
                    <i className="fab fa-pinterest" aria-hidden="true"></i>
                    <span className="visible-hidden">Pinterest</span>
                </a>
                <a href="https://www.instagram.com">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                    <span className="visible-hidden">Instagram</span>
                </a>
            </section>
        </main>
    );
};

export default App;
