<template>
    <div class="Hero container">
        <div class="text-container">
            <h1 class="header">Фитнес-карта для тебя</h1>
            <p class="snippet">Подбери карту по своим параментрам в нашем финтес-клубе</p>
            <button @click="scroll" class="button btn">Начать</button>
        </div>
        <img class="image" src="~assets/svg/dumbbell.svg" alt="fire extinguisher">
    </div>
</template>

<script>

    export default {
        methods: {
            //////
            scroll() {

            }
        }
    }
</script>

<style scoped>
    .Hero {
        display: flex;
        padding: 2rem 0;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }

    .text-container {
        width: 50%;
        margin-top: 4rem;
    }

    .header {
        font-weight: 900;
        font-size: 5rem;
    }

    .snippet {
        color: grey;
        font-size: 1.25rem;
    }

    .image {
        width: 27.5rem;
        margin-top: 2rem;
    }

    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
    }

    .button:hover {
        width: 21.5rem;
    }

    @media (max-width: 500px) {
        .Hero {
            height: 40vh;

        }
    }
</style>
