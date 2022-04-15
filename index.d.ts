declare module "plexidev-paste" {
    export interface Options {
        title?: string | null;
        language?: string | null;
    }

    /**
     *
     * @param content Any string as text to be uploaded.
     * @param options An object of options to be passed to the paste server.
     */
    function post(content: string, options?: Options): any;

    /**
     *
     * @param id The id of the paste to be retrieved.
     */
    function get(id: string): any;

    export { post, get };
}
