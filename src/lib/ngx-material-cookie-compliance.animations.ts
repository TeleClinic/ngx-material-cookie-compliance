import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const fadeToBottom: AnimationTriggerMetadata = trigger(
    'fadeToBottom',
    [
        transition(
            ':enter', [
                style({opacity: 0, transform: 'translateY(100%)'}),
                animate('225ms ease-in-out', style({opacity: 1, transform: 'translateY(0)'}))
            ]
        ),
        transition(
            ':leave', [
                style({opacity: 0, transform: 'translateY(0)'}),
                animate('225ms ease-in-out', style({opacity: 1, transform: 'translateY(100%)'}))
            ]
        )
    ]
);
