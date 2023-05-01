<template>
  <div class="flex flex-col relative min-h-screen">
    <div class="flex bg-primary-600 py-5 px-10">
      <h1 class="text-2xl font-bold">Chronos</h1>
    </div>
    <div class="p-5 relative flex-1 mb-16">
      <slot />
      <RegisterModalCreate />
    </div>

    <BottomNav />
  </div>
</template>
