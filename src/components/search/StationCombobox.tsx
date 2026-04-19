import * as React from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BD_STATIONS } from "@/lib/bd-stations";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  exclude?: string;
}

export function StationCombobox({ value, onChange, placeholder, exclude }: Props) {
  const [open, setOpen] = React.useState(false);
  const stations = React.useMemo(
    () => Array.from(new Set(BD_STATIONS)).filter((s) => s !== exclude).sort(),
    [exclude],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between h-12 rounded-xl bg-background/60 hover:bg-background border-border/80 font-normal text-foreground transition-all",
            !value && "text-muted-foreground",
            open && "ring-soft border-primary/40",
          )}
        >
          <span className="flex items-center gap-2 truncate min-w-0">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate font-medium">{value || placeholder}</span>
          </span>
          <ChevronsUpDown className="h-4 w-4 opacity-40 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0 rounded-xl shadow-lg-soft border-border/60" align="start">
        <Command>
          <CommandInput placeholder="Search 460+ stations..." className="h-11" />
          <CommandList className="max-h-72">
            <CommandEmpty>No station found.</CommandEmpty>
            <CommandGroup>
              {stations.map((s) => (
                <CommandItem
                  key={s}
                  value={s}
                  onSelect={() => { onChange(s); setOpen(false); }}
                  className="rounded-lg"
                >
                  <Check className={cn("mr-2 h-4 w-4 text-primary", value === s ? "opacity-100" : "opacity-0")} />
                  <span className="font-medium">{s}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
