<template>
  <div class="container mx-auto">
    <header class="font-display text-4xl pt-16 pb-4">
      <strong>
        <g-link to="/">_</g-link>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
