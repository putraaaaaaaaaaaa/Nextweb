const Input = () => {
  return (
    <section className="relative rounded-xl bg-card/50 shadow-2xl" id="2">
      <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
        <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
          2
        </div>
        <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
          Masukan Data Akun
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="id"
              className="block text-xs font-medium text-foreground pb-2"
            >
              ID
            </label>
            <div className="flex flex-col items-start">
              <input
                className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                type="number"
                id="id"
                name="id"
                min="0"
                placeholder="Ketikan ID"
                autoComplete="id"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="server"
              className="block text-xs font-medium text-foreground pb-2"
            >
              Server
            </label>
            <div className="flex flex-col items-start">
              <input
                className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                type="number"
                id="server"
                name="server"
                min="0"
                placeholder="Ketikan Server"
                autoComplete="server"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-card-foreground">
          <div>
            <p>
              <em>
                Contoh: 123455789 (12345) maka ID = 123456789 dan Server = 12345
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input;
