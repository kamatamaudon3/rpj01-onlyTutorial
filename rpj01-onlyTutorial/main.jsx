const App = () => {
    return (
        <div>
            <Tweet
                icon="π½"
                displayName="γγγγε€ͺι"
                accountName="morokoshi"
                content="δ»ζ₯γοΌζ₯γγγγγγγΎγ"
            />
            <Tweet
                icon="π¦"
                displayName="γ«γγΎγγ"
                accountName="kanimaiu"
                content="δ»ζ₯γοΌζ₯γ«γγγγΎγ"
            />

        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);