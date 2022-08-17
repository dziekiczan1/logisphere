import Loads from "./components/Loads/Loads";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div class="min-h-full">
      <nav class="bg-gray-800">Navigation</nav>

      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl tracking-tight font-bold text-gray-900">
            Available loads
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-2 border-gray-200 rounded-lg h-96">
              <Loads />
            </div>
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
