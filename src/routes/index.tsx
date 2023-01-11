import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Collapse from "~/components/Collapse";

export default component$(() => {
    return (
        <div>
            <h1 class="text-3xl text-primary hover:text-secondary transition-all duration-700">
                Welcome to Qwik <span class="lightning">⚡️</span>
            </h1>
            <div className="flex items-center my-5 gap-5">
                <a href="" className="btn">Button</a>
                <div className="btn btn-primary">Button</div>
                <button className="btn btn-secondary">Button</button>
                <button className="btn btn-secondary btn-disabled">Button</button>
                <button className="btn btn-secondary btn-lg">LG</button>
                <button className="btn btn-secondary">md</button>
                <button className="btn btn-secondary btn-sm">SM</button>
                <button className="btn btn-secondary btn-xs">XS</button>
                <button className="btn btn-secondary btn-circle">XS</button>
                <button className="btn btn-secondary loading">Loading</button>

            </div>
            <div className="divider my-5"></div>
            <Collapse/>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
