<script lang="ts">
     import type { PageServerData } from './$types';
  
  export let data: PageServerData ;
 

  </script>
  <h1>Du Ma</h1>
  <ul>
    {#each data.movies as movie}
      <li>
        <h3>{movie.title}</h3>
        <img loading="lazy" src="{movie.poster}" alt="{movie.title}">
      </li>
    {/each}
  </ul>