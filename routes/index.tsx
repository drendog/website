import { Head } from "$fresh/runtime.ts";

import CodeBlock from "../components/CodeBlock.tsx";
import PMSelect from "../islands/PMSelect.tsx";

export default function Home() {
  const title = "oak: a middleware framework";
  const description =
    "oak is a middleware framework for handling HTTP requests across Deno, Node.js, Bun and Cloudflare Workers.";
  const image = "https://oakserver.org/oak-social.png";
  const alt = "a cartoon squirrel holding an acorn";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={alt} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={alt} />

        <meta property="og:type" content="website" />
      </Head>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            class="w-full p-8 lg:p-20 xl:p-32"
            src="/oak_logo.svg"
            alt="a cartoon squirrel holding an acorn"
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
              A middleware framework for JavaScript and TypeScript
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              oak is a middleware framework for handling HTTP requests across
              {" "}
              <a href="https://deno.com/" target="blank_" class="underline">
                Deno
              </a>,{" "}
              <a href="https://nodejs.org/" target="blank_" class="underline">
                Node.js
              </a>,{" "}
              <a href="https://bun.sh/" target="blank_" class="underline">
                Bun
              </a>{" "}
              and{" "}
              <a
                href="https://workers.cloudflare.com/"
                target="blank_"
                class="underline"
              >
                Cloudflare Workers
              </a>.
            </p>
            <PMSelect />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <CodeBlock
            code={`import { Application, Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen();
`}
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Familiar API
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              oak was inspired by Express.js and koa and originally written for
              the Deno runtime. This makes it easy to adapt existing approaches
              with out of the box cross platform support.
            </p>
            <a
              href="https://jsr.io/@oak/oak/doc"
              target="_blank"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              See the docs
            </a>
          </div>
        </div>
      </section>
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com" class="flex items-center">
                <img
                  src="/oak_logo_head.svg"
                  class="mr-3 h-8"
                  alt="oak Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  oak
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Projects
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="https://jsr.io/@oak/acorn" class="hover:underline">
                      acorn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jsr.io/@oak/commons"
                      class="hover:underline"
                    >
                      Commons
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Source
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a
                      href="https://jsr.io/@oak/oak"
                      class="hover:underline"
                    >
                      JSR
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/oakserver/oak"
                      class="hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Guidelines
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a
                      href="https://github.com/oakserver/oak/blob/main/docs/CODE_OF_CONDUCT.md"
                      class="hover:underline"
                    >
                      Code of Conduct
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 oak. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://github.com/oakserver"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
