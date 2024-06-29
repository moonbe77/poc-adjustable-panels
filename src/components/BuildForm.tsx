import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMap } from "@vis.gl/react-google-maps";
import React from "react";
import { Button } from "./ui/button";

function BuildForm() {
  const map = useMap();
  const [markers, setMarkers] = React.useState([] as google.maps.Marker[]);

  const form = useForm({
    defaultValues: {
      lat: "",
      lng: "",
      zoom: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      if (!map) return;

      // add marker
      const marker = await new google.maps.Marker({
        map,
        position: {
          lat: parseFloat(value.lat),
          lng: parseFloat(value.lng),
        },
      });
      setMarkers([...markers, marker]);
    },
  });
  console.log(form);

  // React.useEffect(() => {
  //   return () => {
  //     markers.forEach((marker) => {
  //       marker.setMap(null);
  //     });
  //   };
  // }, [markers]);

  return (
    <div className="p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        onReset={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.reset();
          markers.forEach((marker) => {
            marker.setMap(null);
          });
        }}
      >
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <form.Field
            name="lat"
            validators={{
              onBlur: ({ value }) => (!value ? "Enter Value" : undefined),

              onChange: ({ value }) => {
                if (value) {
                  return parseFloat(value) > 90 || parseFloat(value) < -90
                    ? "Invalid Value"
                    : undefined;
                }
              },
            }}
            children={(field) => (
              <div className="w-full">
                <Label htmlFor={field.name}>Latitude</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors && field.state.meta.isTouched}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  type="number"
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                ) : null}
              </div>
            )}
          />
          <form.Field
            name="lng"
            validators={{
              onBlur: ({ value }) => (!value ? "Enter Value" : undefined),
            }}
            children={(field) => (
              <div className="w-full">
                <Label htmlFor={field.name}>Longitude</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  type="number"
                />
                {field.state.meta.errors ? (
                  <em role="alert">{field.state.meta.errors.join(", ")}</em>
                ) : null}
              </div>
            )}
          />
          <form.Field
            name="zoom"
            children={(field) => (
              <div className="w-full">
                <Label htmlFor={field.name}>Zoom</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  type="number"
                  min={1}
                  max={20}
                />
              </div>
            )}
          />
        </div>
        <div className="flex flex-row justify-between mt-8">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </Button>
            )}
          />
          <Button type="reset" variant="outline">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BuildForm;
