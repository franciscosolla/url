/**
 * Redirects the user to the specified path by updating the browser's URL and triggering a popstate event.
 * @param path - The path to redirect to.
 */
export function redirect(path: string) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
}