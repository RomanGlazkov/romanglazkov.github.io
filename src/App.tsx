import { Button, Input } from '@mui/material';

function App() {
    const handleSubscribe = () => {
        const value = prompt('Enter an email or user_id for subscription');

        if (value && value.trim().length > 0) {
            const data = value.includes('@') ? { email: value } : { user_id: value };

            new AKPush().initSubscription(data);
        }
    };

    const handleExplicitSubscribe = () => {
        new AKPush().initSubscription();
    };

    return (
        <>
            <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleSubscribe}
            >
                Subscribe to push
            </Button>
            <p>If you want to subscribe from Firefox/Safari, please try:</p>
            <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleExplicitSubscribe}
            >
                Subscribe explicitly
            </Button>
            <p className="jessy">Element with class .jessy</p>
            <Input id="test-input" placeholder="Enter something here..." />
        </>
    );
}

export default App;
