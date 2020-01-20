export interface MantisResolutionStateInterface {
    resolutions: any;
    closed_status: any;
    open_status: any,
}

export const MantisResolutionInitialState: MantisResolutionStateInterface = {
    resolutions: [],
    closed_status: [],
    open_status: [],
}