import {component$, useSignal} from "@builder.io/qwik";

interface IComponent {
}

export default component$(({}: IComponent) => {
    const open = useSignal(false)
    return <div tab-index="0"
                className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${open.value && 'collapse-open'}`}>
        <div className="collapse-title text-xl font-medium" onClick$={() => {
            open.value = !open.value
        }}>
            Focus me to see content
        </div>
        <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
    </div>
});
