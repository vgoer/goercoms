<template>
    <div>
        <label class="switch" >
            <input type="checkbox" @click="toggleDark()">
            <span class="slider"></span>
        </label>
    </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style>
.switch {
    --width-of-switch: 4em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    display: inline-block;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    transition: .5s;
    border-radius: 40px;
}

.slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background-image: linear-gradient(to right top, #ff8c00, #ff6f2c, #ff5048, #ff2d64, #ff0080);
    transition: .4s;
}

input:checked+.slider {
    background-color: #303136;
}

input:checked+.slider:before {
    left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}
</style>