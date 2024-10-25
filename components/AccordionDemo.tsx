import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const triggerNames = [
  "Incident",
  "Patient Information",
  "Units",
  "Personnel",
  "Narrative",
  "Past Medical History",
  "Physical Exam",
  "Vital Signs",
  "Interventions",
  "Medications",
  "Personal Protective Equipment",
  "Billing Information",
  "Medical Device Events",
  "Signatures",
  "Meta Data",
];

export const AccordionDemo = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleAll = () => {
    if (expandedItems.length === triggerNames.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(triggerNames.map((_, index) => `item-${index}`));
    }
  };

  const toggleItem = (itemValue: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemValue)
        ? prev.filter((item) => item !== itemValue)
        : [...prev, itemValue]
    );
  };

  return (
    <div className="w-full">
      <div className="flex p-4 justify-between items-center sticky top-0 bg-background z-50">
        <div className="text-lg font-medium">Incident Drill-down</div>
        <Button onClick={toggleAll}>
          {expandedItems.length === triggerNames.length ? (
            <>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <Accordion
        type="multiple"
        className="w-full p-4 pt-0"
        value={expandedItems}
        onValueChange={setExpandedItems}
      >
        {triggerNames.map((name, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              className="p-4 py-2 focus:outline-none bg-accent hover:bg-accent/80"
              onClick={() => toggleItem(`item-${index}`)}
            >
              {name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto pt-2">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Array.from({ length: 8 }).map((_, rowIndex) => (
                      <tr key={rowIndex}>
                        <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                          Row {rowIndex + 1} - Col 1
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          Row {rowIndex + 1} - Col 2
                        </td>
                        <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                          Row {rowIndex + 1} - Col 3
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          Row {rowIndex + 1} - Col 4
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
