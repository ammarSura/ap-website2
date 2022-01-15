import json

# # f = open('Flights.json')
# lst = []

# for i in range(10):
#     lst.append({
#         "flight_number": "SE" + str(5000 + i),
#         "plane_type": "Airbus A320",
#         "from": "BOM",
#         "to": "DEL",
#         "start_time": "January 21, 2022 " + str(12 + 1) + ":00:00",
#         "end_time": "January 21, 2022 " + str(12 + 2) + ":30:00"
#         })
#     lst.append({
#         "flight_number": "SE" + str(6000 + i),
#         "plane_type": "Airbus A320",
#         "from": "BOM",
#         "to": "BLR",
#         "start_time": "January 21, 2022 " + str(12 + 1) + ":00:00",
#         "end_time": "January 21, 2022 " + str(12 + 2) + ":30:00",
#     })

# json_object = json.dumps(lst, indent = 4) 
# print(json_object)

# jsonFile = open("flights.json", "w")
# jsonFile.write(json_object)
# jsonFile.close()

f = open('Flights.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)
print(type(data[0]["start_time"]))