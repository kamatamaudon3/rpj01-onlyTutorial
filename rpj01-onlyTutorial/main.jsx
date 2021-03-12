const App = () => {
    return (
        <div>
            <Tweet
                icon="🌽"
                displayName="もろこし太郎"
                accountName="morokoshi"
                content="今日も１日もろこしがうまい"
            />
            <Tweet
                icon="🦀"
                displayName="カニまいう"
                accountName="kanimaiu"
                content="今日も１日カニがうまい"
            />

        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);