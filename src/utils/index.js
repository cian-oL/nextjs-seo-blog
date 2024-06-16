// add multiple truthy classes
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
