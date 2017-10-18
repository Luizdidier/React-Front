export const SHARE_VALUE = 'SHARE_VALUE';

export const shareValue = (value) => {
    return {
        type: SHARE_VALUE,
        payload: value
    }
}