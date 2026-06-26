import { jsx as _jsx } from "react/jsx-runtime";
import { PagePlaceholder } from '../components/PagePlaceholder';
export const NotFoundPage = () => {
    return _jsx(PagePlaceholder, { title: "404 - Page Not Found", description: "The page you requested does not exist." });
};
