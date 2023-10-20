<template>
    <div>
        <ul>
            <li>
                <router-link to="/page/1">page 1</router-link>
            </li>
            <li>
                <router-link to="/page/2">page 2</router-link>
            </li>
            <li>
                <PrefetchLink to="/page/3">page 3</PrefetchLink>
            </li>
            <li>
                <PrefetchLink to="/async-page">async-page</PrefetchLink>
            </li>
        </ul>
        <ul
            id="bottom"
            style="margin-top: 110vh"
        >
            <li>
                <PrefetchLink
                    to="/page/4"
                    :prefetch-files="['/foo']"
                >
                    page 4
                </PrefetchLink>
            </li>
            <li>
                <router-link to="/page/5">page 5</router-link>
            </li>
            <li>
                <router-link to="/page/6">page 6</router-link>
            </li>
            <li>
                <router-link to="/page/1">page 1</router-link>
            </li>
        </ul>
    </div>
</template>
