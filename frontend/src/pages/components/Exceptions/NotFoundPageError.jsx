import { Link } from "react-router-dom";

const NotFoundPageError = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-background text-foreground">
            <div className="max-w-md text-center">
                <div className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight">Oops, page not found!</h1>
                <p className="mt-4 text-muted-foreground">
                    The page you're looking for doesn't exist. Check the URL or go back to the homepage.
                </p>
                <div className="mt-6">
                    <Link
                        href="#"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPageError;