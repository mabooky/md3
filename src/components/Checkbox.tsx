'use client';

import { Icon } from "@m3/core/Icon";
import { StateLayer } from "@m3/core/StateLayer";
import { TouchTarget, TouchTargetProps } from "@m3/core/TouchTarget";
import { cn } from "@m3/utils/cn";

export type CheckboxProps = TouchTargetProps & {
    checked?: boolean;
    indeterminate?: boolean;
    error?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function Checkbox({
    ref,
    className,
    checked = false,
    indeterminate = false,
    error = false,
    onChange,
    ...props
}: CheckboxProps) {
    return (
        <TouchTarget
            ref={ref}
            role="checkbox"
            aria-checked={indeterminate ? "mixed" : checked}
            className={cn("md3-checkbox", className)}
            data-checked={checked}
            data-indeterminate={indeterminate}
            data-error={error}
            {...props}>
            <div className="md3-checkbox__container"/>
            <Icon className="md3-checkbox__icon">
                {indeterminate ? 'check_indeterminate_small' : 'check'}
            </Icon>
            <StateLayer className="md3-checkbox__state-layer" />
        </TouchTarget>
    )
}