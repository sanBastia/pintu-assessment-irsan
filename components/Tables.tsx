/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetPriceChanges, useGetSupportedCurrencies } from "@/data/get-data";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  combineCurrencyAndPriceChangeData,
  CurrrencyFormat,
} from "@/lib/utils";
import SearchInput from "./SearchInput";
import { LoadingSpinner } from "./LoadingSpinner";
import CoinLogo from "./CoinLogo";

import TableCellPersentage from "./TableCellPersentage";
import TableHeaderSort from "./TableHeaderSort";
import ErrorComponent from "./ErrorComponent";

export default function Tables() {
  const {
    data: dataPricechange,
    error: errorPriceChange,
    isLoading: isLoadingPriceChange,
  } = useGetPriceChanges();
  const {
    data: dataSupportedCurrencies,
    error: errorSupportedCurrencies,
    isLoading: isLoadingSupportedCurrencies,
  } = useGetSupportedCurrencies();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("high");

  if (errorPriceChange && errorSupportedCurrencies)
    return (
     <ErrorComponent error={errorPriceChange.message} />
    ) ;

  if (isLoadingPriceChange || isLoadingSupportedCurrencies) {
    return (
      <div className="w-full">
        <div className="flex px-10 2xl:px-36 my-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (dataPricechange && dataSupportedCurrencies) {
    const supportedCurrencies = dataSupportedCurrencies.payload;
    const priceChanges = dataPricechange.payload;
    const combined = combineCurrencyAndPriceChangeData(
      supportedCurrencies,
      priceChanges
    );

    // Sorting logic based on sortBy and sortOrder
    const sortedData = [...combined].sort((a, b) => {
      const aValue = parseInt(a[sortBy]);
      const bValue = parseInt(b[sortBy]);

      if (sortOrder === "high") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      }
    });

    return (
      <div className="w-full">
        <div className="flex px-10 2xl:px-36 my-4">
          <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
        </div>
        <div className="flex px-10 2xl:px-36">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={2}>Crypto</TableHead>
                <TableHeaderSort
                  displayTitle="Harga"
                  title="latestPrice"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSortBy={setSortBy}
                />
                <TableHeaderSort
                  displayTitle="24 JAM"
                  title="day"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSortBy={setSortBy}
                />
                <TableHeaderSort
                  displayTitle="1 MGG"
                  title="week"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSortBy={setSortBy}
                />
                <TableHeaderSort
                  displayTitle="1 BLN"
                  title="month"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSortBy={setSortBy}
                />
                <TableHeaderSort
                  displayTitle="1 THN"
                  title="year"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  setSortBy={setSortBy}
                />
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData
                .filter(
                  (coin) =>
                    coin.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    coin.currencySymbol
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                )
                .map(
                  (
                    curr: {
                      name: string;
                      currencySymbol: string;
                      latestPrice: string;
                      color: string;
                      day: string;
                      week: string;
                      month: string;
                      year: string;
                      logo: string;
                    },
                    index: any
                  ) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium" colSpan={2}>
                        <div className="flex gap-6">
                          <CoinLogo url={curr.logo} color={curr.color} />
                          <div className="flex-col">
                            <h1 className="text-lg font-bold">{curr.name}</h1>
                            <span className="text-sm text-gray-700">
                              {curr.currencySymbol}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <h1 className="text-lg font-bold">
                          {CurrrencyFormat(curr.latestPrice)}
                        </h1>
                      </TableCell>
                      <TableCellPersentage persentage={curr.day} />
                      <TableCellPersentage persentage={curr.week} />
                      <TableCellPersentage persentage={curr.month} />
                      <TableCellPersentage persentage={curr.year} />
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
