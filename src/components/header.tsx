import { Button } from "@mui/material";
import { routerElements } from "../routing";

export function Header() {
  console.log(routerElements);

  return (
    <header className="flex w-full bg-green-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-bold text-white">
          OrbitEye
        </a>
        <nav>
          <ul className="flex space-x-4">
            {routerElements.map((item, i) => {
              return (
                <li key={i}>
                  <Button
                    sx={{
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    <a href={item.url}>{item.label}</a>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// <li>
//               <Button
//                 sx={{
//                   color: "white",
//                   borderColor: "white",
//                 }}
//               >
//                 <a href="/">Dashboard</a>
//               </Button>
//             </li>
//             <li>
//               <Button
//                 sx={{
//                   color: "white",
//                   borderColor: "white",
//                 }}
//               >
//                 <a href="/account">Account</a>
//               </Button>
//             </li>
