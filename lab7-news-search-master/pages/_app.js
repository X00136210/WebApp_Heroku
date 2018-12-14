// Pageprops
// 

// Import App and Container dependencies
import App, { Container } from 'next/app';

// Import the Page component
import Page from '../components/Page';

// Define the custom App - a class which extents the default App
class MyApp extends App {

    render() {
        // Compent will be the page content
        // e.g. index or about
        const {Component, pageProps} = this.props;

        return (
            // Container contains page content
            <Container>
                <Page>
                    {/* Put content in Page component (template) */}  
                    <Component {...pageProps} />
                </Page>            
            </Container>
        );
    }
}

export default MyApp;